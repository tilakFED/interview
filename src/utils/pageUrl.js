export function interviewRoute(profileId, levelId, page = 'questions', itemId) {
    const base = `/${encodeURIComponent(profileId)}/${encodeURIComponent(levelId)}`
    if (page === 'answer') return `${base}/answers/${encodeURIComponent(itemId)}`
    if (page === 'topic') return `${base}/topics/${encodeURIComponent(itemId)}`
    if (page === 'topics') return `${base}/topics`
    return `${base}/questions`
}
