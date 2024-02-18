import styles from "./Search.module.css";

//Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import PostDetail from "../../components/PostDetail/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados nenhum posts a partir da sua busca...</p>
            <Link cl to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts?.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Search;
