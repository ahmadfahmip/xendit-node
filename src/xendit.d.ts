import Errors from './errors';
import { CardService } from './card';
import { VAService } from './va';
import { XenditOptions } from './xendit_opts';

export = class Xendit {
  constructor(opts: XenditOptions);
  static Errors = Errors;
  Card: typeof CardService;
  VirtualAcc: typeof VAService;
};
