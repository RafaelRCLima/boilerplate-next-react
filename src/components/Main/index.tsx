import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Text to test if this is working right'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo do React" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="img/hero-illustration.svg"
    alt="Developer in front a PC"/>
  </S.Wrapper>
)

export default Main
