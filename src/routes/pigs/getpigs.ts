export const get = async (req, res) => {
  return {
    status: 200,
    body: {
      pigs: [
        {
          uid: '1',
          name: 'Pig A',
          img: 'https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          farmId: 1
        },
        {
          uid: '2',
          name: 'Pig B',
          img: 'https://images.pexels.com/photos/4619531/pexels-photo-4619531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          farmId: 1
        },
        {
          uid: '3',
          name: 'Pig C',
          img: 'https://cdn.pixabay.com/photo/2019/04/08/12/26/pig-4111895__340.jpg',
          farmId: 2
        },
        {
          uid: '4',
          name: 'Pig D',
          img: 'https://cdn.pixabay.com/photo/2014/07/08/13/39/pigs-387204__340.jpg',
          farmId: 2
        },
      ]
    }
  }
}