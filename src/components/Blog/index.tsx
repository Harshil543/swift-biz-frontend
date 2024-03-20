import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constant/blog";

export default function Blog() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
            Read our blog
          </h2>
          <p className="mt-5 font-normal text-gray-600 font-pj">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        <div className="grid  grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-3 gap-y-8 gap-x-8 lg:gap-x-20">
          {data?.map((blog: any) => (
            <div key={blog.id} className="relative group">
              {/* <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-25 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                  }}
                ></div>
              </div> */}
              <div className="overflow-hidden rounded-lg  aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                  src={blog.imgUrl}
                  alt=""
                />
              </div>
              <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
                {blog.date}
              </p>
              <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
                {blog.title}
              </p>
              <Link to="#" title="">
                <span className="absolute inset-0" aria-hidden="true"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
