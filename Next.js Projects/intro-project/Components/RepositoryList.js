import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

//This is the react component for the public of repositories that Alessandra and Rohan have

export default function RepositoryList(){
    return(

        <div className={styles.grid}>
            
            <Link href="https://github.com/Rohan-s18/Artificial_Intelligence">

                <div className={styles.card}>
                    <h2>Artificial Intelligence Repository</h2>
                    <p>Repository for AI. This Repository contains source code for probelm solving using Search (A*, Optimization etc.) and the basics of Machine Learning and Classification. Source code is in Java and Python</p>
                </div>
                
            </Link>


            <Link href='https://github.com/alessandra-puccio/Tsuro'>

                <div className={styles.card}>
                    <h2>Tsuro</h2>
                    <p>Repository containing the source code for a 2-person Tsuro game in Java. Tsuro is A two-person board game in which players place tiles on a board and attempt to create the longest path through their tiles.</p>
                </div>
                
            </Link>


            <Link href='https://github.com/Rohan-s18/Web_Development'>
                
                <div className={styles.card}>
                    <h2>Web Development Repository</h2>
                    <p>Repository for Web Development. This Repository contains work which includes the basics of HTML/CSS/JavaScript, Intermediate JavaScript, React and Next.js Projects</p>
                </div>
                
            </Link>


            <Link href='https://github.com/alessandra-puccio/GWC-DEMO'>
                
                <div  className={styles.card}>
                    <h2>Girls who code</h2>
                    <p>Repository for Girls Who Code at Case Western Reserve University. This is a really good group that promotes coding among females.</p>
                </div>

            </Link>
            

            <Link href='https://github.com/Rohan-s18/Data-Structures'>

                <div className={styles.card}>
                    <h2>Data Structures Repository</h2>
                    <p>Repository for Data Structures and Algorithms. This Repository contains the source code for most of the basic data strucutres as well as their algorithms. Source code is in Java</p>
                </div>
                
            </Link>

            
            <Link href='https://github.com/Rohan-s18/Intro-to-Linux-and-C'>

                <div className={styles.card}>
                    <h2>Intro to C and Linux Repository</h2>
                    <p>Repository for simple C programs and linux commands. This also includes awk and bash scripts.</p>
                </div>
                
            </Link>

            
            <Link href='https://github.com/Rohan-s18/Data-Analysis-and-Machine-Learning'>

                <div className={styles.card}>
                    <h2>Data Analysis and Machine Learning Repository</h2>
                    <p>Repository for Data Analysis and Machine Learning notebooks. This Repository contains Jupyter Notebooks that use scikit-learn and FBProphet for Data Analysis and Machine Learning.</p>
                </div>
                
            </Link>


        </div>

    )
}