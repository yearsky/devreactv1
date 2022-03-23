// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Label } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import DevDataGrid from './DevDataGrid'

// ** Styles
import '@styles/react/apps/app-users.scss'


const UsersList = () => {
  return (
    <div className='app-user-list'>
      {/* <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='Total Users'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Paid Users'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Active Users'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='Pending Users'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
          />
        </Col>
      </Row> */}
      {/* <Table /> */}
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Data Users</CardTitle>
        </CardHeader>
        <CardBody>
          <DevDataGrid/>
        </CardBody>
      </Card>
    </div>
  )
}

export default UsersList
