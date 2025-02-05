import Link from "next/link";

export default function Page(){
  return(
    <main className="">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href="week-2">Week 2 Assignment</Link>        
      </div>
      <div>
        <Link href="week-3">Week 3 Assignment</Link>
      </div>
      <div>
        <Link href="week-4">Week 4 Assignment</Link>
      </div>
      <div>
        <Link href="week-5">Week 5 Assignment</Link>
      </div>
    </main>
  )
}
