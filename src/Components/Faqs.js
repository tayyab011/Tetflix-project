import React from 'react';

const Faqs = () => {
    return (
      <div className=" p-4 bg-black text-white md:p-10">
        <h1 className="text-3xl text-white pb-5 ">
          Frequently Asked Quetions{" "}
        </h1>
        <div className="collapse rounded-2xl shadow-lg shadow-rose-900">
          <input type="checkbox" className="peer " />
          <div className="collapse-title  bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            What is Tetflix? 
          </div>
          <div className="collapse-content bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </p>
          </div>
        </div>{" "}
        <br />
        <div className="collapse rounded-2xl shadow-lg shadow-rose-900">
          <input type="checkbox" className="peer " />
          <div className="collapse-title  bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            How much does Tetflix cost?
          </div>
          <div className="collapse-content bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            <p>
              Watch Tetflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              USD2.99 to USD9.99 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <br />
        <div className="collapse rounded-2xl shadow-lg shadow-rose-900">
          <input type="checkbox" className="peer " />
          <div className="collapse-title  bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            Where Can I Watch?
          </div>
          <div className="collapse-content bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            <p>
              Watch anywhere, anytime. Sign in with your Tetflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </p>
          </div>
        </div>
        <br />
        <div className="collapse rounded-2xl shadow-lg shadow-rose-900">
          <input type="checkbox" className="peer " />
          <div className="collapse-title  bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            Is Tetflix For Kids?
          </div>
          <div className="collapse-content bg-rose-700 text-primary-content peer-checked:bg-rose-900 peer-checked:text-secondary-content">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </p>
          </div>
        </div>
        <br />
      </div>
    );
};

export default Faqs;