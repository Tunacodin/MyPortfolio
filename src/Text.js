import React from 'react'

export default function MoreAbout() {
  return (
    <div className="w-full bg-black font-DMSans h-screen p-10">
      <div className="flex flex-col justify-center items-center text-slate-50 gap-5 text-center">
        <h1 className="text-center text-white font-bold text-4xl pt-20 pb-4">
          More About Me
        </h1>
        <div className="flex flex-row w-full h-full text-3xl gap-5">
          <div className="w-full bg-slate-800  p-10 justify-center items-center flex flex-col rounded-lg">
            <h1>
              👋 Hi there! I will be telling you my favorite activities in this
              capture..
            </h1>
            <br />
            <div
              style={{ height: "1px" }}
              className="items-center mx-auto mb-10 bg-white w-5/6"
            ></div>

            <div className="w-full h-full justify-center items-center text-center">
              <p style={{lineHeight:'44px'}} className="w-4/5 mx-auto h-full ">
                We people, have many things to get happy in our lives. But many
                times we could
                <span style={{ color: "lightgreen" }}>have difficulties </span>
                finding them.
                According to me,
                <span style={{ color: "lightgreen" }}>
                  the more we try, the easier it becomes to find them
                </span>
                . If I come to me, I interest in playing piano, watching
                              movies.My favorite movie is Interstellar.I literally love that movie.
                              In fact, my interest in piyano has started thanks to Interstellar.
                              This is my goal. I set a goal after I watched this movie. Now I can play Interstellar soundtrack without knowing the notes, thank God.
                              but I dont like series.
                              Actually one or two times I have
                tried to watch series before such as dark, but I couldnt
                continue. I guest I must not a series person, ıdk. And I do
                fitness, rarely swimming and playing table tennis especially
                beginning of the my university life. I literally enjoy talking
                about philosophy, but not in English. because I dont think I
                have
                <span style={{ color: "lightgreen" }}> word reservoir </span>
                enough to talk philosophy. Of course I read book, particulary
                novals, it can be Russian Literature like{" "}
                <span style={{ color: "lightgreen" }}>
                  crime and punishment
                </span>
                ,{" "}
                <span style={{ color: "lightgreen" }}>
                  the hunchback of notre dame
                </span>
                .I am also computer engineering student and I am
                <span style={{ color: "lightgreen" }}>familiar with</span>
                software. And lastly ride a bike.. I love it.. I can go
                everywhere with my powerfull and
                <span style={{ color: "lightgreen" }}> miserable </span> bike
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const colors = {
  dark: {
    background: "#000000",
    primary: "#A7A7A7",
    secondary: "#D9D9D9",
    thirth: "#C9D9D9",
    success: "rgba(1, 140, 15, 1)",
    successbg: "rgba(215, 255, 224, 1)",
    textdark: "rgba(102, 102, 102, 1)",
    textgray: "rgba(167, 167, 167, 1)",
    gradient: "rgba(210, 22, 253, 1), rgba(21, 221, 10, 1)",
  },
  light: {
    background: "#ffffff",
    text: "#000000",
    gradient: "rgba(110, 22, 253, 1), rgba(231, 225, 210, 1)",
  },
};
