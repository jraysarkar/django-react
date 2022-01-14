// ** React Imports
import { Fragment, useState, forwardRef, useRef } from 'react'
import XLSX from 'xlsx'
import * as FileSaver from 'file-saver'

// ** Table Data & Columns
import { data, columns } from './data'

// ** Add New Modal Component
import AddNewModal from './AddNewModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, UncontrolledButtonDropdown, Row, Button,
  DropdownToggle, Modal, ModalHeader, ModalBody, FormGroup, Input, CustomInput, ModalFooter, Col,
  DropdownMenu, Label,
  DropdownItem } from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const DataTableWithButtons = () => {
  const tableRef = useRef()

 
  const [modal, setModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('xlsx')

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleExport = () => {
    toggleModal()
    const bookType = fileFormat
    const wb = XLSX.utils.table_to_book(tableRef.current, { sheet: 'Sheet JS' })
    const wbout = XLSX.write(wb, { bookType, bookSST: true, type: 'binary' })

    const s2ab = s => {
      const buf = new ArrayBuffer(s.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff
      return buf
    }
    const file = fileName.length ? `${fileName}.${fileFormat}` : `excel-sheet.${fileFormat}`

    return FileSaver.saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), file)
  }

  // ** States
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())


        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )


  return (
    <Fragment>
      <Card>
      <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
      <div>
          <CardTitle className='mb-75' tag='h2'>Assets Details</CardTitle>
          <CardSubtitle className='text-muted'>Organization Assets Details</CardSubtitle>
          </div>
          <div className='d-flex mt-md-0 mt-0'>
          <Button.Ripple color='primary' className= 'ml-0' onClick={() => toggleModal()}>
           Export
          </Button.Ripple>
          <Col className='d-flex align-items-center justify-content-end mt-0' md='8' sm='12'>
          <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
            </Col>
          </div>
        </CardHeader>
        <DataTable
          noHeader
          pagination
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          selectableRowsComponent={BootstrapCheckbox}
        />
      </Card>
      <Modal
        isOpen={modal}
        toggle={() => toggleModal()}
        className='modal-dialog-centered'
        onClosed={() => setFileName('')}
      >
        <ModalHeader toggle={() => toggleModal()}>Export To Excel</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              type='text'
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              placeholder='Enter File Name'
            />
          </FormGroup>
          <FormGroup>
            <CustomInput
              type='select'
              id='selectFileFormat'
              name='customSelect'
              value={fileFormat}
              onChange={e => setFileFormat(e.target.value)}
            >
              <option>xlsx</option>
              <option>csv</option>
              <option>txt</option>
            </CustomInput>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => handleExport()}>
            Export
          </Button>
          <Button color='flat-danger' onClick={() => toggleModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default DataTableWithButtons