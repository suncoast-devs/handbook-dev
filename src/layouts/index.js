import React from 'react'
import { Section, Container } from 'bloomer'

import './screen.scss'

const Layout = ({ children }) => <Section>{children()}</Section>

export default Layout
