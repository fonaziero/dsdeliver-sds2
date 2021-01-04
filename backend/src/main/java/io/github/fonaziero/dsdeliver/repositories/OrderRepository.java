package io.github.fonaziero.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.fonaziero.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
