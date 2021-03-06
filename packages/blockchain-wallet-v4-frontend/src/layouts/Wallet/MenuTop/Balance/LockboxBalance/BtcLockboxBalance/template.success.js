import { CoinBalanceWrapper } from 'components/Balances'
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Success = props => {
  const { balance } = props

  const Wrapper = styled.div``

  return (
    <LinkContainer to='/lockbox'>
      <Wrapper data-e2e='balanceDropdown-lockbox-btc'>
        <CoinBalanceWrapper coin='BTC' balance={balance} />
      </Wrapper>
    </LinkContainer>
  )
}

Success.propTypes = {
  balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default Success
