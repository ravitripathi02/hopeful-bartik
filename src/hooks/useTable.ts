import { useState, useEffect } from "react";
import ordersData from "../../public/data/orders.json";

// Type for each order
export interface Order {
  orderId: string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: string;
}

interface SortConfig {
  key: keyof Order | null;
  direction: "asc" | "desc";
}

export default function useTableData(pageSize = 10) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<Order[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filter, setFilter] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: "asc" });

  const fetchData = (page: number, pageSize: number, filter: string, sortConfig: SortConfig): Promise<{ results: Order[]; total: number }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredData: Order[] = [...ordersData];

        // Filtering
        if (filter) {
          filteredData = filteredData.filter(
            (order) =>
              order.user.toLowerCase().includes(filter.toLowerCase()) ||
              order.project.toLowerCase().includes(filter.toLowerCase()) ||
              order.orderId.toLowerCase().includes(filter.toLowerCase()) ||
              order.address.toLowerCase().includes(filter.toLowerCase()) ||
              order.status.toLowerCase().includes(filter.toLowerCase())
          );
        }

        // Sorting
        if (sortConfig.key) {
          filteredData.sort((a, b) => {
            const aValue = a[sortConfig.key!];
            const bValue = b[sortConfig.key!];

            if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
          });
        }

        // Pagination
        const start = (page - 1) * pageSize;
        const paginatedData = filteredData.slice(start, start + pageSize);

        resolve({ results: paginatedData, total: filteredData.length });
      }, 100);
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData(currentPage, pageSize, filter, sortConfig);
      setData(result.results);
      setTotalPages(Math.ceil(result.total / pageSize));
    };
    loadData();
  }, [currentPage, filter, sortConfig, pageSize]);

  function nextPage() {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }

  function prevPage() {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  }

  function requestSort(key: keyof Order) {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  }

  return {
    data,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setFilter,
    requestSort,
    sortConfig,
    goToPage,
  };
}
