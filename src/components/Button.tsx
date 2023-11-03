interface CSS {
    paddingX:string,
    paddingY:string,
    backGround:string,
    hover?: string
}

const Button = (props:CSS) => {
   
  return (
    <button className={`${props.backGround} border-none rounded-full text-white px-6 py-2 lg:${props.paddingX} lg:${props.paddingY}`}>Delivery</button>
    
  )
}

export default Button