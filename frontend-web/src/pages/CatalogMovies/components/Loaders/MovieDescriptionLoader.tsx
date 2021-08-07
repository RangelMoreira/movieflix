import ContentLoader from 'react-content-loader';

const MovieDescriptionLoader = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={180}
    backgroundColor="#858585"
    foregroundColor="#6C6C6C"
  >
    <rect x="0" y="467" rx="2" ry="2" width="256" height="24" /> 
    <rect x="0" y="0" rx="2" ry="2" width="1200" height="400" /> 
    <rect x="0" y="423" rx="2" ry="2" width="351" height="24" />
  </ContentLoader>
)

export default MovieDescriptionLoader;