import { generateList } from "../../../../core/utils/list";
import ContentLoader from "react-content-loader"


const MovieCardLoader = () => {
  const loaderItems  = generateList(3);

  return (
    <>
      {loaderItems.map(item => (

        <ContentLoader
          key={item}
          speed={1}
          width={250}
          height={335}
          viewBox="0 0 250 335"
          backgroundColor="#858585"
          foregroundColor="#6C6C6C"
        >

          <rect x="0" y="0" rx="10" ry="10" width="250" height="325" />
        </ContentLoader>

      ))}
    </>
  )
}

export default MovieCardLoader;