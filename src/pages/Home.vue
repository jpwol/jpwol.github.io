<template>
  <!-- desktop hero -->
  <section v-if="!isMobile" class="relative w-full h-[400px] bg-black overflow-hidden border-4 border-b-blue-200">
    <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full"></canvas>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
      <h1 class="text-4xl font-bold">Josh Wolfe</h1>
      <p class="mt-4 text-lg opacity-80">Low-Level Software Engineer</p>
    </div>
  </section>

  <!-- TODO: mobile hero here -->
  <section v-else>
  </section>

  <!-- left side content -->
  <div class="relative text-white lg:flex">
    <div
      class="w-full left-50 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:p-10 md:p-10 p-5 z-10 flex flex-col justify-between">
      <header class="lg:space-y-4 space-y-2 lg:mt-20">
        <h1 class="lg:text-2xl text-3xl font-bold">Quick Access</h1>
        <div class="text-xl flex flex-col space-y-4">
          <router-link to="/projects"
            class=" hover:text-blue-200 transition transition-all duration-300 hover:text-2xl ">Projects</router-link>
          <router-link to="/blog"
            class=" hover:text-blue-200 transition transition-all duration-300 hover:text-2xl ">Blog</router-link>
          <router-link to="/contact"
            class=" hover:text-blue-200 transition transition-all duration-300 hover:text-2xl ">Contact</router-link>
        </div>

        <div class="flex pt-2 space-x-4">
          <a href="https://wilkes.edu" target="_blank" rel="noopener">
            <img src="../assets/wilkes_logo.svg" alt="Github"
              class="w-8 h-8 transition-transform transform hover:scale-125" />
          </a>
          <a href="https://github.com/jpwol" target="_blank" rel="noopener">
            <img src="../assets/github.svg" alt="Github"
              class="w-6 h-6 mt-1 transition-transform transform hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/joshua-wolfe-596197359/" target="_blank" rel="noopener">
            <img src="../assets/linkedin.svg" alt="LinkedIn"
              class="w-8 h-8 invert transition-transform transform hover:scale-125" />
          </a>
          <a href="https://www.instagram.com/wolfe_man_/" target="_blank" rel="noopener">
            <img src="../assets/instagram.svg" alt="Github"
              class="w-8 h-8 invert transition-transform transform hover:scale-125" />
          </a>
        </div>
      </header>
    </div>

    <div class=" lg:p-10 md:pl-10 md:pr-10 pl-5 pr-5">
      <section class="lg:max-w-xl space-y-6 lg:pt-14 pb-6 text-gray-300">
        <h1 class="text-2xl text-white font-bold pt-6 pb-2">About Me</h1>
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
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
          qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit,
          sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et
          dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
          quis nostrum[d] exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum
          i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil
          molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas
          nulla pariatur? At vero eos et accusamus et iusto odio dignissimos
          ducimus, qui blanditiis praesentium voluptatum deleniti atque
          corrupti, quos dolores et quas molestias excepturi sint, obcaecati
          cupiditate non provident, similique sunt in culpa, qui officia
          deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
          quidem reru[d]um facilis est e[r]t expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio, cumque nihil impedit,
          quo minus id, quod maxime placeat facere possimus, omnis voluptas
          assumenda est, omnis dolor repellend[a]us. Temporibus autem quibusdam
          et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
const isMobile = ref(false)

let ctx
let particles = []
let mouse = { x: null, y: null }
const numParticles = 100
const maxDistance = 120

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * 0.8
    this.vy = (Math.random() - 0.5) * 0.8
    this.radius = 2
  }
  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > canvas.value.width) this.vx *= -1
    if (this.y < 0 || this.y > canvas.value.height) this.vy *= -1
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.fill()
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x
      let dy = particles[i].y - particles[j].y
      let dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < maxDistance) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / maxDistance) * 0.5})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }

    if (mouse.x !== null) {
      let dx = particles[i].x - mouse.x
      let dy = particles[i].y - mouse.y
      let dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < maxDistance) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / maxDistance) * 0.8})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  ctx.fillStyle = 'white'

  particles.forEach(p => {
    p.update()
    p.draw()
  })

  connectParticles()
  requestAnimationFrame(animate)
}

function resizeCanvas() {
  canvas.value.width = canvas.value.offsetWidth
  canvas.value.height = canvas.value.offsetHeight
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768

  if (!isMobile.value) {
    ctx = canvas.value.getContext('2d')

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(Math.random() * canvas.value.width, Math.random() * canvas.value.height))
    }

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    window.addEventListener('mouseout', () => {
      mouse.x = null
      mouse.y = null
    })

    animate()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', null)
  window.removeEventListener('mouseout', null)
})
</script>

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
