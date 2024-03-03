interface Props {
    title: string,
    content: string,
    commentQty: number,
    tags: string[],
    category: Category
}

export enum Category {
  JS = "JavaScirpt",
  TS = "TypeScript",
  CSharp = "C#"
}

const Destructuring = ({title, content, commentQty, tags, category} : Props) => {
  return (
    <div>
        <h2>Title: {title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários {commentQty}</p>
        <div>
            {tags.map((tag) => (
                <span>#{tags}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring
