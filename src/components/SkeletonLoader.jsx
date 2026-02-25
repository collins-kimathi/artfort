// SkeletonLoader component/page file.
function SkeletonLoader({ logoSrc }) {
  return (
    <div
      className="app-skeleton-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Artfort Atelier"
    >
      <div className="loader-surface">
        <span className="loader-bone loader-bone-hero" />
        <span className="loader-bone loader-bone-title" />
        <span className="loader-bone loader-bone-subtitle" />
        <span className="loader-bone loader-bone-subtitle short" />
        <div className="loader-grid">
          <span className="loader-bone loader-bone-card" />
          <span className="loader-bone loader-bone-card" />
          <span className="loader-bone loader-bone-card" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
