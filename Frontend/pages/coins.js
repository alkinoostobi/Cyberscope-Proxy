import { useEffect, useState } from 'react';
import { fetchData } from './api/fetchCoins';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/router';

const columns = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'symbol', headerName: 'Icon', width: 130 },
  { field: 'current_price', headerName: 'Current Price', width: 250 },
  { field: 'highestPrice', headerName: 'Highest Price (24h)', width: 250 },
  { field: 'lowestPrice', headerName: 'Lowest Price (24h)', width: 250 },
  { field: 'priceChange', headerName: 'Price Change (24h)', width: 250 },
];

const FullScreenContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContainer = styled.div`
  width: 80%;
`;
const TableWrapper = styled.div`
  height: ${({ tableHeight }) => tableHeight}px;
  width: 100%;

  .MuiDataGrid-root {
    background-color: transparent; /* Replace with your desired background color */
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [tableHeight, setTableHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchDataP = async () => {
      try {
        const coinsData = await fetchData('coins/markets');
        setCoins(coinsData);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };

    fetchDataP();
  }, []);

  useEffect(() => {
    const updateTableHeight = () => {
      const newTableHeight = window.innerHeight - 64; // Adjust the height based on your layout
      setTableHeight(newTableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();

    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);

  const handleRowClick = (params) => {
    const coinId = params.row.id;
    router.push(`/coins/${coinId}`);
  };

  const handlePageChange = (params) => {
    const { page, pageSize } = params;
    const newTableHeight = window.innerHeight - 64 - 56 * (pageSize + 1); // Adjust the height based on your layout and table controls height
    setTableHeight(newTableHeight);
    // Add your custom pagination logic here
  };

  return (
    <FullScreenContainer>
      <CenteredContainer>
      <TableWrapper tableHeight={tableHeight}>
        {coins.length > 0 ? (
          <DataGrid
            rows={coins}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            autoHeight
            onPageChange={handlePageChange}
            onRowClick={handleRowClick}
          />
        ) : (
          <LoadingContainer>Loading...</LoadingContainer>
        )}
      </TableWrapper>
      </CenteredContainer>
    </FullScreenContainer>
  );
};

export default Coins;
