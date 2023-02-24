import { type NextPage } from "next";
import Head from "next/head";
import {
  type Character,
  useInfiniteAllCharactersQuery,
} from "../graphql/client";
import Header from "../components/Header";
import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard";
import { useCallback, useEffect, useRef } from "react";

const Home: NextPage = () => {
  const {
    data: infiniteData,
    isLoading: infiniteIsLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteAllCharactersQuery(
    "page",
    {
      page: 1,
    },
    {
      getNextPageParam: (lastPage) => ({
        page: lastPage?.characters?.info?.next,
      }),
    }
  );

  const observerElem = useRef(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      console.log("target", target);
      if (target?.isIntersecting) {
        void fetchNextPage();
      }
    },
    [fetchNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    console.log("element", { element }, { observerElem });
    if (element) observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return (
    <>
      <Head>
        <title>Rick & Morty</title>
        <meta name="description" content="Rick & Morty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
        <Header />
        <section className="flex min-w-full flex-col items-center justify-start p-20">
          <div className="flex flex-wrap justify-center">
            {infiniteData?.pages.map((page) =>
              page?.characters?.results?.map((character) => (
                <CharacterCard
                  key={character?.id}
                  character={character as Character}
                />
              ))
            )}
          </div>
        </section>

        <div className="loader" ref={observerElem}>
          {(infiniteIsLoading || isFetchingNextPage) && <Loading />}
          {!isFetchingNextPage && hasNextPage && (
            <h4 className="text-l mb-2  font-semibold tracking-tight text-gray-900 dark:text-white">
              No Characters Left
            </h4>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
