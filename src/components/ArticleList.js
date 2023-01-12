import Article from "../components/Article";
import blogData from "../data/blog";


function ArticleList(){
    const allArticles = blogData.posts.map(arr =>{
        return(<Article title={arr.title} date={arr.date} preview={arr.preview}/>)
    })
  return(
        <main>
            {allArticles}
        </main>
    )
}

export default ArticleList;