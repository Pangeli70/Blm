/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */


import {
  BrdBlm_eBrand } from "../../../../enums/BrdBlm_eBrand.ts";
import {
  BrdBlm_TC_IAccessoryConfig } from "../../../interfaces/BrdBlm_TC_IAccessoryConfig.ts";
import {
  BrdBlm_TC_SeD_eConfiguration } from "../../enums/BrdBlm_TC_SeD_eConfiguration.ts";
import {
  BrdBlm_TC_SeD_eDesign } from "../../enums/BrdBlm_TC_SeD_eDesign.ts";
import {
  BrdBlm_TC_SeD_eFinish } from "../../enums/BrdBlm_TC_SeD_eFinish.ts";
import {
  BrdBlm_TC_SeD_eFinishVariant } from "../../enums/BrdBlm_TC_SeD_eFinishVariant.ts";
import {
  BrdBlm_TC_SeD_eVisaType } from "../../enums/BrdBlm_TC_SeD_eVisaType.ts";
import {
  BrdBlm_TC_SeD_ISectionConfig } from "../../interfaces/BrdBlm_TC_SeD_ISectionConfig.ts";
import {
  BrdBlm_TC_SeD_V_eModel } from "../enums/BrdBlm_TC_SeD_V_eModel.ts";
import {
  BrdBlm_TC_SeD_V_eSlidingSystem } from "../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import {
  BrdBlm_TC_SeD_V_IWicketDoorConfig } from "./BrdBlm_TC_SeD_V_IWicketDoorConfig.ts";

/**
 * Configurazione del portone sezionale compresi gli accessori.
 * Utilizzabile per portoni Sezionali, Phenix, Swing e Ibis
 *
 * @remark Viene creata convalidando i campi a partire dai dati grezzi
 * che possono provenire dall'url, dal local storage o da altre sorgenti.
 * Viene usata per la generazione dei vari parametri per la costruzione del
 * prodotto
 */
export interface BrdBlm_TC_SeD_V_IDoorConfig {

  /**
   * Nome del file originale 
   */
  file?: string;

  /**
   * Contenuto del file originale
   */
  data?: string;

  /**
   * Versione del file originale
   */
  version?: string;

  /**
   * Marchio del portone (Breda, Bremet, Personalizzato, ecc.)
   */
  brand: BrdBlm_eBrand;

  /**
   * Modello portone sezionale
   */
  model: BrdBlm_TC_SeD_V_eModel;
  /**
   * Tipo di scorrimento
   */
  sliding: BrdBlm_TC_SeD_V_eSlidingSystem;

  /**
   * Larghezza portone in mm
   */
  W: number;
  /**
   * Altezza portone in mm
   */
  H: number;
  /**
   * Architrave portone in mm
   */
  h: number;
  /**
   * Inclinazione guide scorrimento in gradi, solo per scorrimenti inclinati
   */
  a: number;

  /**
   * Configurazione (Base, Visa, Stip&Go ecc.):
   * colonna ID tabella Configurazioni - Tabelle configurazioni porte
   */
  configuration: BrdBlm_TC_SeD_eConfiguration;
  /**
   * Tipo di sezioni Vetrate (Nessuna, Luxor, Lux, ecc.):
   * Rif. Tabella Configurazioni -> Tipo visa
   */
  visaType: BrdBlm_TC_SeD_eVisaType;

  /**
   * Finitura (Stucco, wood grain ecc.):
   * colonna ID tabella Finiture -> Finiture - Tabelle configurazioni porte
   */
  finish: BrdBlm_TC_SeD_eFinish;
  /**
   * Variante finitura: (Stucco, wood grain ecc.)
   * tabella Finiture -> Varianti finitura - Tabelle configurazioni porte
   */
  variant: BrdBlm_TC_SeD_eFinishVariant;
  /**
   * Disegno: (Flat, single, multi ecc.)
   * colonna ID tabella DisegniManto - Tabelle configurazioni porte
   */
  design: BrdBlm_TC_SeD_eDesign;
  /**
   * Colore verniciatura esterna:
   * tabella Finiture -> Colori fuori standard -> Codice (M00-C00-RAL 0000)
   */
  extColor: string;
  /**
   * Colore verniciatura interna:
   * tabella Finiture -> Colori fuori standard -> Codice (M00-C00-RAL 0000)
   * */
  intColor: string;


  /**
   * Sezioni del portone
   */
  sections: BrdBlm_TC_SeD_ISectionConfig[];

  /**
   * @optional
   * Dati configurazione PPI per configurazioni Stop&go
   */
  wicketDoor?: BrdBlm_TC_SeD_V_IWicketDoorConfig;

  /**
   * Soglia ribassata anche per allineamento manti
   */
  hasLoweredThreshold: boolean;


  /**
   * Foratura per maniglia di sollevamento
   */
  hasHandle: boolean;
  /**
   * Elenco Accessori
   */
  accessories: BrdBlm_TC_IAccessoryConfig[];


  /**
   * Oggetto generico per attaccare altre cose a questi dati
   */
  payload?: Record<string, any>;
}

/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved
 * @licence You cannot host, display, distribute or share this Work in any
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * ---------------------------------------------------------------------------
 */
