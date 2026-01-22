import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Articles.module.css'

export default function Articles() {
  const articles = [
    {
      title: 'Build A Custom Pagination Component In Reactjs From Scratch',
      description: 'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.',
      readTime: '9 min read',
      image: '/images/articles/pagination component in reactjs.jpg',
      link: '#'
    },
    {
      title: 'Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens',
      description: 'Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.',
      readTime: '10 min read',
      image: '/images/articles/create loading screen in react js.jpg',
      link: '#'
    },
    {
      title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
      description: 'Learn how to build a reusable custom hook for form validation in ReactJS. Handle inputs and errors efficiently with this comprehensive guide.',
      readTime: '8 min read',
      image: '/images/articles/form validation in reactjs using custom react hook.png',
      link: '#'
    },
    {
      title: 'Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers',
      description: 'Master the art of smooth scrolling in ReactJS. Learn step-by-step techniques to create seamless scrolling experiences in your React applications.',
      readTime: '7 min read',
      image: '/images/articles/smooth scrolling in reactjs.png',
      link: '#'
    },
    {
      title: 'Creating An Efficient Modal Component In React Using Hooks And Portals',
      description: 'Learn how to create an efficient modal component in React using hooks and portals. Build reusable modals with proper accessibility and performance.',
      readTime: '9 min read',
      image: '/images/articles/create modal component in react using react portals.png',
      link: '#'
    },
    {
      title: 'Build A Fabulous Todo List App With React, Redux And Framer-Motion',
      description: 'Create a beautiful and functional todo list app using React, Redux for state management, and Framer Motion for smooth animations.',
      readTime: '12 min read',
      image: '/images/articles/todo list app built using react redux and framer motion.png',
      link: '#'
    },
    {
      title: 'Redux Simplified: A Beginner\'s Guide For Web Developers',
      description: 'A comprehensive beginner\'s guide to Redux. Learn the fundamentals of state management with Redux in a simple and easy-to-understand way.',
      readTime: '11 min read',
      image: '/images/articles/What is Redux with easy explanation.png',
      link: '#'
    },
    {
      title: 'What Is Higher Order Component (Hoc) In React?',
      description: 'Understand Higher Order Components (HOC) in React. Learn how to use HOCs to enhance component functionality and reuse code effectively.',
      readTime: '6 min read',
      image: '/images/articles/What is higher order component in React.jpg',
      link: '#'
    }
  ]

  return (
    <>
      <Head>
        <title>Articles - Portfolio</title>
        <meta name="description" content="Articles page - Technical articles and tutorials about web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.articles}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Words Can Change The World!</h1>
          
          <div className={styles.articlesGrid}>
            {articles.map((article, index) => (
              <Link key={index} href={article.link} className={styles.articleCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className={styles.articleImage}
                  />
                </div>
                <div className={styles.articleInfo}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleDescription}>{article.description}</p>
                  <div className={styles.articleMeta}>
                    <span className={styles.readTime}>{article.readTime}</span>
                    <Image src="/images/svgs/external-link.svg" alt="External link" width={16} height={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
