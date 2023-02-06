import { surpriseMePrompts } from '../constants'
import FileSaver from 'file-saver'
function getRandomPrompt (prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  return randomPrompt === prompt ? getRandomPrompt(prompt) : randomPrompt
}

async function downloadImage (_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}

export { getRandomPrompt, downloadImage }
