const addObserver = (reference, rootMargin, threshold, callback) => {
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        callback(entry)
        observer.unobserve(reference)
      }
    },
    {
      rootMargin,
      threshold
    }
  )
  if (reference) {
    observer.observe(reference)
  }
}

export default addObserver