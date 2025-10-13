export function getHomeData() {
    // mimic an API call with Promise
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          description:
            "Experienced Front-End Developer with over 10 years of expertise in designing, developing, and maintaining responsive web applications using Angular (up to v18), React, TypeScript, and JavaScript. Skilled in architecting scalable UI solutions with focus on reusability, performance, and user experience. Passionate about learning new technologies like React and applying innovative approaches in Agile development environments.",
        });
      }, 1000); // mimic 1s delay
    });
  }
  
  // src/services/apiService.js
export function getTimelineData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Lead UI Developer",
          company: "Imagility, Bangalore",
          duration: "Jun 2023 - Present",
          description:
            "Leading development of Imagility’s form builder platform (Angular 11 → 17). Designed modular components, integrated NgRx & RxJS, implemented lazy loading, and built a React-based i9 module.",
        },
        {
          title: "Senior UI Engineer",
          company: "Aark Technologies, Hyderabad",
          duration: "Nov 2022 - Jun 2023",
          description:
            "Developed Angular 12–15 enterprise apps. Focused on scalable architecture, reusable components, and NgRx for state management.",
        },
        {
          title: "Senior UI Developer",
          company: "Verizon Wireless, Alpharetta, GA",
          duration: "May 2017 - Apr 2022",
          description:
            "Built and migrated large-scale enterprise apps to Angular 2–4. Created full-stack modules using Node.js & Express, dashboards with Angular Material, and improved test coverage.",
        },
        {
          title: "Front-End Developer",
          company: "Verizon, Irving, TX",
          duration: "Jan 2016 - Apr 2017",
          description:
            "Developed IoT Smart City POCs (Smart Park, Smart Light) using AngularJS & D3.js. Integrated Google Maps APIs and built RESTful APIs using Node.js.",
        },
        {
          title: "UI Developer",
          company: "Dex Media, Santa Clara, CA",
          duration: "Jun 2014 - Dec 2015",
          description:
            "Developed responsive web pages using HTML5, CSS3, and AngularJS. Led redesign and migration of DexKnows website from ASP to Java.",
        },
        {
          title: "Graduate Teaching Assistant",
          company: "George Mason University, VA",
          duration: "Dec 2013 - May 2014",
          description:
            "Conducted lab sessions on HTML, CSS, and JS. Mentored students and assisted with technical coursework.",
        },
        {
          title: "Education(Masters)",
          company: "George Mason University, VA",
          duration: "JAN 2013 - May 2014",
          description:
            "Master’s in Computer Systems Engineering (GMU).",
        },
        {
          title: "Education(Bachelors)",
          company: "JNT University, India",
          duration: "2008 - 2012",
          description:
            "Bachelor’s in Electronics & Communications Engineering (JNTU).",
        },
      ]);
    }, 800);
  });
}
