import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
    return (
        <div className={styles.container}>
      <Head>
        <title>PapaganForms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link href="/"><a class="nav-link">PapaganForms</a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdown10">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main">
        <div class="jumbotron">
          <div class="col-sm-8 mx-auto">
            <h1>Navbar examples</h1>
            <p>This example is a quick exercise to illustrate how the navbar and its contents work. Some navbars extend the width of the viewport, others are confined within a <code>.container</code>. For positioning of navbars, checkout the <a href="../navbar-top/">top</a> and <a href="../navbar-top-fixed/">fixed top</a> examples.</p>
            <p>At the smallest breakpoint, the collapse plugin is used to hide the links and show a menu button to toggle the collapsed content.</p>
            <p>
              <a class="btn btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
            </p>
          </div>
        </div>
      </main>
      <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; {(new Date().getFullYear())} PapaganForms</span> · GitHub (MIT) · Made by <a href="https://twitter.com/fsuaterdogan" target="_blank">Ferhat Suat Erdogan</a> in <a href="https://www.google.com/maps/place/Turkey/" target="_blank">Turkey</a>
      </div>
    </footer>
      </div>
    </div>
    )
}