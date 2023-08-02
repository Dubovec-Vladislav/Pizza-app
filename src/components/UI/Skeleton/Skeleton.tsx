import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={315}
    height={480}
    viewBox="0 0 260 545"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="281" rx="10" ry="10" width="260" height="40" />
    <rect x="0" y="340" rx="10" ry="10" width="260" height="85" />
    <rect x="0" y="440" rx="10" ry="10" width="60" height="40" />
    <rect x="130" y="440" rx="10" ry="10" width="130" height="40" />
  </ContentLoader>
)

export default Skeleton;