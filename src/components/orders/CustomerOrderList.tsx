import { useQuery } from "@apollo/client";
import Grid from "@component/grid/Grid";
import { ORDER_LIST } from "lib/graph";
import React, { useState } from "react";
import FlexBox from "../FlexBox";
import Hidden from "../hidden/Hidden";
import DashboardPageHeader from "../layout/DashboardPageHeader";
import TableRow from "../TableRow";
import { H5 } from "../Typography";
import OrderRow from "./OrderRow";
import Select from "react-select";
import { CustomPagination } from "@component/pagination";
export interface CustomerOrderListProps {}

const CustomerOrderList: React.FC<CustomerOrderListProps> = () => {
  const query = new URLSearchParams(
    process.browser ? window.location.search : null
  );
  const page = query.get("page") ? Number(query.get("page")) : 1;

  const [status] = useState("PENDING");
  const [filter, setFilter] = useState({
    value: 0,
    label: status,
  });

  const { data, loading } = useQuery(ORDER_LIST, {
    variables: {
      limit: 3,
      offset: page,
      status: filter.label,
    },
  });

  const handleChangeFilter = async (filter) => {
    await setFilter(filter);
  };

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div>
      <DashboardPageHeader
        title="My Orders"
        iconName="bag_filled"
        order_count={data && data?.clientOrderList?.length}
      />
      <Grid
        container
        horizontal_spacing={6}
        vertical_spacing={4}
        style={{ marginBottom: 20 }}
      >
        <Grid item md={3} xs={12}>
          <Select
            className="basic-single"
            classNamePrefix="select"
            id="product_type"
            name="product_type"
            placeholder="Choose Type"
            options={[
              { value: 0, label: "PENDING" },
              { value: 1, label: "IN PROGRESS" },
              { value: 2, label: "APRROVED" },
              { value: 3, label: "CANCELLED" },
            ]}
            value={filter}
            onChange={handleChangeFilter}
            required
          />
        </Grid>
      </Grid>
      <Hidden down={769}>
        <TableRow padding="0px 18px" boxShadow="none" bg="none">
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Order #
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Status
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Order Date
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Total
          </H5>
          <H5
            flex="0 0 0 !important"
            color="text.muted"
            px="22px"
            my="0px"
          ></H5>
        </TableRow>
      </Hidden>

      {data &&
        data?.clientOrderList?.data?.map((order, ind) => (
          <OrderRow order={order} key={ind} />
        ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        {/* <Pagination
          pageCount={data.clientOrderList.length}
          onChange={(data) => {
            setOffset(Number(data));
          }}
        /> */}
        <CustomPagination
          size={data && data?.clientOrderList?.pagination?.size}
          total={data && data?.clientOrderList?.pagination?.total}
          currentPage={data && data?.clientOrderList?.pagination?.current}
        />
      </FlexBox>
    </div>
  );
};

export default CustomerOrderList;
