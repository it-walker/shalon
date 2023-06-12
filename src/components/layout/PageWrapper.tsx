import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAppState } from '../../redux/features/appStateSlice'

type Props = {
  // eslint-disable-next-line react/require-default-props
  state?: string
  children: ReactNode
}

function PageWrapper(props: Props) {
  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.state) {
      // eslint-disable-next-line react/destructuring-assignment
      dispatch(setAppState(props.state))
    }
  }, [dispatch, props])

  // eslint-disable-next-line react/jsx-no-useless-fragment, react/destructuring-assignment
  return <>{props.children}</>
}

export default PageWrapper
