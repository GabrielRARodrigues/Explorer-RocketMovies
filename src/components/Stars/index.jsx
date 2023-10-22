import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Container } from './styles'

export function Stars({ count }) {
  function renderStars(number) {
    if (number === 0) {
      return (
        <>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </>
      )
    } else if (number === 1) {
      return (
        <>
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </>
      )
    } else if (number === 2) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </>
      )
    } else if (number === 3) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </>
      )
    } else if (number === 4) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </>
      )
    } else {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </>
      )
    }
  }

  return <Container>{renderStars(count)}</Container>
}
