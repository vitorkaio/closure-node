
export default function Car() {
  let board = ''
  let model = ''

  const setModel = (newModel) => {
    model = newModel
  }

  const getModel = () => model

  return {
    setBoard: (newBoard) => board = newBoard,
    getBoard: () => board,
    setModel: setModel,
    getModel: getModel
  }

}
