import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }: any) {

  const genre = searchParams.genre || 'fetchTrending'
  const res =
    await fetch(`https://api.themoviedb.org/3${genre === 'fetchTrending' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US`, {
      next: {
        revalidate: 1 // หน้านี้จะถูกสร้างใหม่ทุก ๆ 10,000 วินาที
      }
    });

  // const res = await new Promise<any>((resolve) => {
  //   setTimeout(async () => {
  //     const response = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTrending' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US`);
  //     resolve(response)
  //   }, 0);
  // })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();


  const results = data.results;

  console.log("results : ", results)

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
