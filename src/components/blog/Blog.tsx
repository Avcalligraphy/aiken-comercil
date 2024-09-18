import Footer from "../home/Footer";
import BoxBlog from "../molecules/BoxBlog";
import Navbar from "../navbar";

const apiURL = process.env.NEXT_PUBLIC_API_URL;
// Async function to fetch blogs from API
async function getBlogs() {
  const res = await fetch(`${apiURL}/api/blogs?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await res.json();
  return data.data; // Return the data array
}

// Komponen utama Blog
export default async function Blog() {
  const blogs = await getBlogs(); // Fetch data secara langsung

  return (
    <>
      <div className="bg-gradient-to-b from-[#040112] to-[#ffff] min-h-screen relative z-10 ">
        <div className="bg-[url('/images/background.png')]">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="flex flex-col items-center gap-[47px] pt-[200px] pb-[100px]">
            {/* Map blog data untuk menampilkan BoxBlog */}
            {blogs.map((blog: any) => (
              <BoxBlog
              key={blog.id}
                id={blog.id}
                title={blog.attributes.title}
                date={blog.attributes.date}
                image={apiURL + blog.attributes.image.data.attributes.url}
                writter={blog.attributes.writter}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
