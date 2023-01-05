package com.Inventory.FruitShop.service;

import com.Inventory.FruitShop.entity.Sales;

import java.util.List;

public interface SalesService {
    public Sales saveSales(Sales sales);


    public List<Sales> fetchSalesList();

    public Sales fetchSalesById(Long billId);

    public void deleteSalesById(Long billId);

    public Sales updateSales(Long billId, Sales sales);
}
