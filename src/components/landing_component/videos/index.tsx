import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../../constant/blog";

export default function Videos() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
            Watch our Videos
          </h2>
          <p className="mt-5 font-normal text-gray-600 font-pj">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        <div className="grid  grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-3 gap-y-8 gap-x-8 lg:gap-x-20">
          {data?.map((blog: any) => (
            <div key={blog.id} className=" group">
              <div className="overflow-hidden rounded-lg ">
                <iframe
                  width="400"
                  height="200"
                  src="https://www.youtube.com/embed/sQwbd7FZSsI?si=7KSTCA6EduFvjpcT"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
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
