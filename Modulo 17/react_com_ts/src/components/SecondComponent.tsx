interface Props  {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>O nome dele é : {props.name}</p>
    </div>
  )
}

export default SecondComponent
