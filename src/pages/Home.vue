<template>
  <div class="relative text-white lg:flex">
    <div
      class="w-full lg:fixed lg:left-20 lg:h-screen lg:w-1/2 p-10 z-10 flex flex-col justify-between"
    >
      <header class="space-y-4 lg:mt-20">
        <h1 class="text-5xl font-bold">Josh Wolfe</h1>
        <h2 class="text-2xl text-gray-300">Low-Level Software Engineer</h2>
        <a
          href="https://wilkes.edu"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xl text-sky-300 hover:text-white transform transition-all duration-300 hover:text-2xl"
          >Wilkes University</a
        >
      </header>
      <div class="flex space-x-4 lg:mb-20 md:pt-10 sm-pt-10">
        <a href="https://github.com/jpwol" target="_blank" rel="noopener">
          <img
            src="../assets/github.svg"
            alt="Github"
            class="w-6 h-6 mt-1 transition-transform transform hover:scale-125"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-wolfe-596197359/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/linkedin.svg"
            alt="LinkedIn"
            class="w-8 h-8 invert transition-transform transform hover:scale-125"
          />
        </a>
        <a
          href="https://www.instagram.com/wolfe_man_/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/instagram.svg"
            alt="Github"
            class="w-8 h-8 invert transition-transform transform hover:scale-125"
          />
        </a>
      </div>
    </div>

    <div class="lg:ml-[50%] p-10">
      <section class="lg:max-w-xl space-y-6 lg:pt-14 pb-6">
        <h1 class="text-2xl font-bold pt-6 pb-2">About Me</h1>
        <p>
          Hi, I’m Josh Wolfe, a former fine-finish carpenter turned low-level
          software engineer.
        </p>

        <p>
          I spent nearly a decade in the trades, building everything from custom
          cabinetry to full-scale residential projects. For several years, I ran
          my own woodworking business, and later I worked as a foreman for a
          solar installation company. But what started as a side hobby, learning
          C and C++ at night, slowly became a passion I couldn’t ignore.
        </p>

        <p>
          I would spend hours after work pouring through textbooks I found
          online and writing programs. This went from being an occasional
          interest to an every-night obsession.
        </p>

        <p>
          Eventually, I made a full pivot into tech. I taught myself Linux, dove
          into systems programming, and found a home in the world of low-level
          software. In 2023, I returned to school to pursue a degree in Computer
          Science, and now I contribute to research projects with my university.
        </p>

        <p>
          I bring a builder’s mindset to programming: attention to detail, pride
          in craftsmanship, and a love of creating things that are both elegant
          and functional.
        </p>

        <p>
          I'm still writing code every day. I love to experiment and learn, and
          as a consequence, I'm fluent in C, C++, Zig, Go, Java, Python, as well
          as Bash scripting. You'll find some of my work on the Projects page
          which shares it's content with my Github. These are projects that
          range from 2018 to present, and will keep growing.
        </p>
      </section>

      <hr class="max-w-xl my-6 border-t border-gray-600" />

      <section class="max-w-xl space-y-6">
        <h1 class="text-2xl font-bold pt-6 pb-2">History</h1>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>
