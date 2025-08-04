export const data = [
  {
    id: 1,
    title: "The Power of Clean Code",
    summary:
      "Discover how writing clean, readable code can improve collaboration, reduce bugs, and speed up development.",
    content: `Clean code is not just about aesthetics; 
              it’s about maintainability, clarity, and 
              effective communication within a development team. 
              Well-structured code reduces the cognitive load on developers, 
              making it easier to debug, extend, and hand off to others. 
              By following consistent naming conventions, 
              breaking down logic into smaller, reusable functions, 
              and minimizing unnecessary complexity, developers create 
              a codebase that is more approachable and less error-prone. 
              Additionally, writing meaningful comments—not to explain what the code does, 
              but why it does it—helps preserve the intent behind decisions, 
              especially in large or long-lived projects. Clean code fosters 
              collaboration, improves onboarding for new team members, 
              and ultimately leads to more reliable and scalable software.`,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Monitor showing java programming",
    author: "Nuhamin Gulilat",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: "JavaScript Async/Await Explained",
    summary:
      "A simple guide to understanding async/await and how it helps with writing asynchronous JavaScript.",
    content: `Async/await makes working with asynchronous operations in 
              JavaScript much more readable, structured, and intuitive. 
              Instead of chaining multiple .then() calls—which can quickly 
              become hard to follow and debug—developers can write asynchronous 
              code that looks and behaves like synchronous code, making the flow 
              of execution easier to understand. This syntactic sugar, built on top 
              of Promises, allows you to pause execution with await until a promise 
              resolves, significantly improving the readability of asynchronous logic, 
              especially in complex workflows such as API calls, file operations, or 
              sequential data fetching. In this post, we break down how to define async 
              functions, use await effectively, and handle errors gracefully with try/catch—all 
              while showcasing real-world examples to help you apply these concepts in your own projects.`,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Black flat screen computer monitor",
    author: "Nuhamin Gulilat",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: "Why You Should Learn React in 2025",
    summary:
      "React continues to dominate frontend development—here's why it's still worth your time this year.",
    content: `React offers a powerful component-based architecture 
              that promotes reusability, modularity, and scalability making 
              it an ideal choice for building complex user interfaces efficiently.
               Backed by Meta (formerly Facebook) and supported by a vast and 
               active ecosystem, React continues to evolve with modern features like hooks, 
               context API, and concurrent rendering, all designed to enhance performance and 
               developer productivity. Its flexibility allows developers to build anything from 
               small widgets to large-scale enterprise applications with ease. Additionally, 
               React integrates well with other tools and libraries, including Next.js, Redux, 
               and React Native, further extending its capabilities across web and mobile platforms. 
               With a strong community, abundant learning resources, and a growing demand in the 
               job market, React remains a valuable and future-proof skill for developers in 2025 
               and beyond.`,
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Turned on monitor displaying programming language",
    author: "Nuhamin Gulilat",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Each",
    summary:
      "Understand the differences between CSS Grid and Flexbox and how to choose the right one for layout.",
    content: `Flexbox is a powerful layout tool designed for one-dimensional layouts, 
              making it ideal for aligning items in a single row or column. 
              It shines when you need to distribute space, align content, or handle 
              responsive design along one axis. CSS Grid, on the other hand, is built 
              for two-dimensional layouts, giving you the ability to define both rows and 
              columns simultaneously—perfect for more complex or structured designs like dashboards, 
              galleries, and multi-section pages. While both tools can be used to achieve similar 
              outcomes in some cases, understanding their strengths helps you choose the right one 
              for the job. In this post, we explore side-by-side examples, practical use cases, 
              and real-world layout scenarios to help you confidently decide when to use Flexbox, 
              when to reach for Grid, and how the two can even complement each other in modern web design.`,
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Turned on gray laptop computer",
    author: "Nuhamin Gulilat",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 5,
    title: "Boost Web Performance with Core Web Vitals",
    summary:
      "Learn how to measure and improve your site's speed, responsiveness, and visual stability using Core Web Vitals.",
    content: `Core Web Vitals focus on three key metrics that directly impact 
              both user experience and SEO performance: Largest Contentful Paint (LCP), 
              which measures loading performance; First Input Delay (FID), which tracks 
              interactivity; and Cumulative Layout Shift (CLS), which reflects visual stability. 
              Google uses these metrics as part of its page ranking criteria, making them essential 
              for developers and site owners aiming to optimize performance. In this guide, we’ll 
              walk you through how to audit your website using Lighthouse, interpret the results, 
              and implement practical, low-effort improvements—such as optimizing images, deferring 
              unused JavaScript, and ensuring fonts load smoothly—to boost your Core Web Vitals scores 
              and create a faster, more stable experience for your users.`,
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Programin image",
    author: "Nuhamin Gulilat",
    date: new Date().toLocaleDateString(),
  },
];
