export const get = async (req, res) => {
  return {
    status: 200,
    body: {
      farms: [ 
        {
          uid: '1',
          name: 'Farm A',
        },
        {
          uid: '2',
          name: 'Farm B'
        }
      ]
    }
  }
}