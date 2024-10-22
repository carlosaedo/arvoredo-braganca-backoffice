export const fetchTrees = async () => {
  try {
    const response = await fetch(`https://lrb-app.grupoerre.pt/api/tree/get-trees/`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
