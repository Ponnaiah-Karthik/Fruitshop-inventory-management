package com.Inventory.FruitShop.serviceImp;

import com.Inventory.FruitShop.entity.Sales;
import com.Inventory.FruitShop.repository.SalesRepository;
import com.Inventory.FruitShop.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class SalesServiceImp implements SalesService {
    @Autowired
    private SalesRepository salesRepository;

    @Override
    public Sales saveSales(Sales sales){
        return salesRepository.save(sales);
    }

    @Override
    public List<Sales> fetchSalesList() {
        return salesRepository.findAll();
    }
    @Override
    public Sales fetchSalesById(Long SalBillId){
        return salesRepository.findById(SalBillId).get();
    }
    @Override
    public void deleteSalesById(Long SalBillId){
        salesRepository.deleteById(SalBillId);
    }
    @Override
    public Sales updateSales(Long SalBillId, Sales sales){
        Sales SalDB= salesRepository.findById(SalBillId).get();
        if(Objects.nonNull(sales.getSalItemCost())&& sales.getSalItemCost()>0){
            SalDB.setSalItemCost(sales.getSalItemCost());
        }
        if(Objects.nonNull(sales.getSalTotalCost())&& sales.getSalTotalCost()>0){
            SalDB.setSalTotalCost(sales.getSalTotalCost());
        }
        if(Objects.nonNull(sales.getSalQuantity())&& sales.getSalQuantity()<0){
            SalDB.setSalQuantity(sales.getSalQuantity());
        }
            return salesRepository.save(SalDB);
    }
}
