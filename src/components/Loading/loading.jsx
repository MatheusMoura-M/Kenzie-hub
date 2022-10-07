import React from 'react'
import { Container } from '../../styles/global'
import styles from "./style.module.css"

const LoadingPage = () => (
    <Container tag="main">
       <div className={styles.loading}></div>
    </Container>
  )

export default LoadingPage
