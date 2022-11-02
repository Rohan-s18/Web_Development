import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Component for the list of my repositories

export default function RepositoryList(){
    return(
        <div className={styles.grid}>
            <a href="https://github.com/Rohan-s18/Artificial_Intelligence" className={styles.card}>
            <h2>Artificial Intelligence Repository</h2>
            <p>Repository for AI. This Repository contains source code for probelm solving using Search (A*, Optimization etc.) and the basics of Machine Learning and Classification. Source code is in Java and Python</p>
        </a><a href='https://github.com/Rohan-s18/Web_Development' className={styles.card}>
                <h2>Web Development Repository</h2>
                <p>Repository for Web Development. This Repository contains work which includes the basics of HTML/CSS/JavaScript, Intermediate JavaScript, React and Next.js Projects</p>
            </a><a href='https://github.com/Rohan-s18/Data-Structures' className={styles.card}>
                <h2>Data Structures Repository</h2>
                <p>Repository for Data Structures and Algorithms. This Repository contains the source code for most of the basic data strucutres as well as their algorithms. Source code is in Java</p>
            </a><a href='https://github.com/Rohan-s18/Intro-to-Linux-and-C' className={styles.card}>
                <h2>Intro to C and Linux Repository</h2>
                <p>Repository for simple C programs and linux commands. This also includes awk and bash scripts.</p>
            </a><a href='https://github.com/Rohan-s18/Data-Analysis-and-Machine-Learning' className={styles.card}>
                <h2>Data Analysis and Machine Learning Repository</h2>
                <p>Repository for Data Analysis and Machine Learning notebooks. This Repository contains Jupyter Notebooks that use scikit-learn and FBProphet for Data Analysis and Machine Learning.</p>
            </a>

            </div>
    )
}