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

  
  const [filteredData, setFilteredData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('xlsx')

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleFilter = e => {
    const dataArr = data
    let filteredData = []
    const value = e.target.value
    setValue(value)
    if (value.length) {
      filteredData = dataArr.filter(col => {
        const startsWithCondition =
        col.asset_type.toLowerCase().startsWith(value.toLowerCase()) ||
        col.asset_id.toLowerCase().startsWith(value.toLowerCase()) ||
        col.source_ip.toLowerCase().startsWith(value.toLowerCase()) ||
        col.source_location.toLowerCase().startsWith(value.toLowerCase()) ||
        col.source_country.toLowerCase().startsWith(value.toLowerCase()) ||
        col.org_id.toString().toLowerCase().includes(value.toLowerCase())

        const includesCondition =
        col.asset_type.toLowerCase().startsWith(value.toLowerCase()) ||
        col.asset_id.toLowerCase().startsWith(value.toLowerCase()) ||
        col.source_ip.toLowerCase().startsWith(value.toLowerCase()) ||
        col.source_location.toLowerCase().startsWith(value.toLowerCase()) ||
        col.source_country.toLowerCase().startsWith(value.toLowerCase()) ||
        col.org_id.toString().toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) return startsWithCondition
        else if (!startsWithCondition && includesCondition) return includesCondition
        else return null
      })
      setFilteredData(filteredData)
      setValue(value)
    }
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
          <CardTitle className='mb-75' tag='h2'>Network Asset</CardTitle>
          <CardSubtitle className='text-muted'>Organization Network Assets</CardSubtitle>
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