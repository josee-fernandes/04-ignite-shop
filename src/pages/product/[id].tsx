import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
        {/* <Image /> */}
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore non error esse tempora corporis numquam cumque officiis accusamus obcaecati, unde iure! Quis facere quidem repudiandae fuga alias, a quo.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
