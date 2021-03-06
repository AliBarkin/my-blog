import Head from 'next/head';
import Navigation from '../components/nav';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ali Batın's Blog</title>
      </Head>

      <div className="header">
        <h1>Ali Batın's Blog</h1>
        <Navigation />
        <div className="posts">
          <h1>first post</h1>
          <p>Uber’de engineering manager (mühendis müdürü) olarak çalışan Dan Heller’ın kendi blogunda ‘Ten Principles for Growth as an Engineer’ başlığıyla paylaştığı yazıyı çok etkili buldum. Kendim defalarca okudum, sizlerinde bundan faydalanmasını istiyorum. Eğer ingilizcenin yeteri seviyedeyse orjinalini okumanızı tavsiye ediyorum.
Yazıyı beğendiğiniz ve faydalı bulduğunuz takdirde takım arkadaşlarınızla, sizinle çalışan mühendislerle paylaşmanızı öneririm. Bir mühendis çoğu zaman takımının ortalamasından daha ileriye gidemiyor. Etrafınızdakilerin gelişimine katkı sağlamak uzun vadede sizi de ileriye götürecek, bunu unutmamak lazım. Son olarak yazının aslına sadık kalmaya çalıştım, fakat bazı noktalarda kelime seçiminde insiyatif kullandım. İyi okumalar.</p>
          <h5 className="date">10 May 2021</h5>
        </div>
      </div>

      <style jsx>{`
        .date{
          text-align: right;
          color: #c7c4c1;
        }
        .container{
          width: 650px;
          max-width: 100%;
          margin: 0 auto; 
        }

        h1{
          text-align: center;
        }

        .header{
          text-align: center;
        }
        
        
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
