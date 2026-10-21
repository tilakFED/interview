export function getLevelQuestions(profile, level) {
    const entries = Object.entries(profile.questions)
    if (!Array.isArray(level.questionIds)) return entries

    const allowedIds = new Set(level.questionIds)
    return entries.filter(([, question]) => allowedIds.has(question.id))
}
